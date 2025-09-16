
document.querySelectorAll('.reveal').forEach((el,i)=>{
    el.style.transitionDelay=(i*70)+'ms';const io=new IntersectionObserver((ents)=>{
    ents.forEach(en=>{if(en.isIntersecting){el.classList.add('show');io.disconnect();}})
    },
    {threshold:.18});io.observe(el)

});
const
path=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.links a').forEach(a=>{
    const href=a.getAttribute('href');
    if(href.endsWith(path))a.classList.add('active')
    }
);
function copyEmail()
{
    const el=document.getElementById('email');
    if(!el)return;navigator.clipboard.writeText(el.textContent.trim()).then(()=>{const t=document.createElement('div');
        t.textContent='Email copied ✅';Object.assign(t.style,{position:'fixed',left:'50%',bottom:'28px',transform:'translateX(-50%)',background:'rgba(255,255,255,.1)',border:'1px solid rgba(255,255,255,.25)',padding:'10px 14px',borderRadius:'10px',backdropFilter:'blur(6px)',zIndex:'9999'});
        document.body.appendChild(t);setTimeout(()=>t.remove(),1600)})
    }
