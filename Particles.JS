    function u(t){
for(i=0;i<2e3;x.fillRect(i?960+i*S(F=260*(t+9)/i+S(i*i)):0,i?500+.2*(2*i*C(F)+2e4/i):0,K=i++?S(i)*9:2e3,K))x.fillStyle=R(99*i,2*i,i,i?1:.4)
}
function u2(t){
s = c.style;
s.backgroundBlendMode='screen';
for(b = [i=99]; i--; b[i]=`radial-gradient(${S(i*i)*2+2.5}em at ${50+15*S(q)}%${Y}%,${R(255,Y,Y/7,Y/49-.3)},#000)`)
Y = 48 + 26 *C(q = i + t);
s.background = b;
}
function u2(t) {
c.style.filter=`sepia(.4)`;
for(i=3e4; i--; x.fillRect(495+930*(frame%2)+S(k=7*i/t+(3*i*t%2)|0)*Z,C(k)*Z+540,.1,t<2))Z=230/C(S(w=i/t))
}
function u2(t) {
w=96,h=54,s=20
for(j=w*h;j--;){
e=j%w*s,y=j/w*s
x.fillStyle=R(T(j*j+t)*256,C(j*j+t)*256,S(j*j+t)*256)
x.fillRect(e,y,s,s);
}
}
function u2(t){
c.width|=0;
w=960
for(i=w*2;i--;x.fillRect(w+w*X/Z,w-Y/Z*w,s=(8/Z)**5,s))
X=3*C(U=i+t)+C(V=t+i/2),Y=C(i*i)*S((i*3)+t)+C(V)*T(V)-2,Z=S(U)-5
}
function u2(t){
c.width|=0;
for(i=70;i--;){for(j=9;j--;){
x.font=7-j/2+"em'"
x.fillText("", i*26+j*20*S(t), 1140-j*50*T(i*j+t/5))
}}
}
var frame = 0;
var startTime = Date.now();
var time = 0;
var c = document.createElement("canvas");
c.width = 1920;
c.height = 1080;
document.body.appendChild(c);
var x = c.getContext("2d");
function clear() {x.resetTransform(); x.clearRect(0, 0, 1920, 1080);}
function S(a) {return Math.sin(a);}
function C(a) {return Math.cos(a);}
function T(a) {return Math.tan(a);}
function R(r, g, b, a = 1) {
r = Math.round(r);
g = Math.round(g);
b = Math.round(b);
let col = `rgba(${r},${g},${b},${a})`;
return col;
};
requestAnimationFrame(nextFrame);
function nextFrame(){
frame++;
u(time);
time = (Date.now() - startTime) / 1000;
requestAnimationFrame(nextFrame);
}
