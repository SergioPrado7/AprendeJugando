// unlockLevels.js
document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  const cls = Array.from(main.classList).map(c => c.toLowerCase());
  let difficulty, subject;

  // 1. Detectar dificultad y materia por la clase de <main>
  cls.forEach(c => {
    if (c.startsWith('facil'))   difficulty = 'facil';
    if (c.startsWith('normal'))  difficulty = 'normal';
    if (c.startsWith('dificil')) difficulty = 'dificil';
    if (c.includes('lectura'))   subject = 'lectura';
    if (c.includes('logica'))    subject = 'logica';
    if (c.includes('mate'))      subject = 'mate';
  });

  // 2. Validar que completes el paso anterior
  let need;
  if      (difficulty==='facil'  && subject!=='lectura') need = 'facil_lectura_completed';
  else if (difficulty==='normal')  need = `facil_${subject}_completed`;
  else if (difficulty==='dificil') need = `normal_${subject}_completed`;
  if (need && localStorage.getItem(need)!=='true') {
    alert(`Debes completar primero ${need.replace(/_/g,' ').toUpperCase()}.`);
    return location.href = '/html/interfazjuego.html';
  }

  // 3. Control de nubes (5 niveles)
  const total=5;
  const keyLevels = `${difficulty}_${subject}_levels_completed`;
  let done = JSON.parse(localStorage.getItem(keyLevels)||'[]');

  // bloquear todas menos la 1
  for (let i=2;i<=total;i++){
    const a=document.querySelector(`.Nivel${i}`);
    if(a){ a.style.pointerEvents='none'; a.style.opacity='0.5'; }
  }

  // si cargo con ?nivel=X lo agrego
  const p=new URLSearchParams(location.search);
  const lvl=parseInt(p.get('nivel'),10);
  if (lvl>=1&&lvl<=total && !done.includes(lvl)) {
    done.push(lvl);
    localStorage.setItem(keyLevels, JSON.stringify(done));
  }

  // marcar ✔ y desbloquear siguiente
  done.forEach(n=>{
    const a=document.querySelector(`.Nivel${n}`);
    if(a){ a.textContent+=' ✓'; a.style.color='green'; }
    const next=document.querySelector(`.Nivel${n+1}`);
    if(next){ next.style.pointerEvents='auto'; next.style.opacity='1'; }
  });

  // si completé los 5, marco la bandera global
  if (done.length===total){
    const flag=`${difficulty}_${subject}_completed`;
    if (localStorage.getItem(flag)!=='true') {
      localStorage.setItem(flag,'true');
      alert(`¡Felicidades! Completaste ${subject.toUpperCase()} (${difficulty.toUpperCase()})`);
    }
  }

  // 4. Arrancar niveles: enlaces con id="startNivelX"
  document.querySelectorAll('[id^="startNivel"]').forEach(el=>{
    el.addEventListener('click', ev=>{
      ev.preventDefault();
      const n = parseInt(el.id.replace('startNivel',''),10);
      location.href = `/nivel${n}_${subject}_${difficulty}.html?nivel=${n}`;
    });
  });
});
