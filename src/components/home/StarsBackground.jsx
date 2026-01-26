// import { useEffect, useRef } from 'react';
// import './StarsBackground.css';

// const StarsBackground = () => {
//   const canvasRef = useRef(null);
//   const animationFrameRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     let stars = [];
//     const numStars = 120;

//     // Установка размера canvas
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);

//     // Класс для звезды
//     class Star {
//       constructor() {
//         this.reset();
//       }

//       reset() {
//         // Начальная позиция от -300 до 400 (появляются в разных местах)
//         this.x = Math.random() * 1400 - 300; // от -300 до 400
//         this.y = Math.random() * 1400 - 300; // от -300 до 400
//         // История позиций для длинного хвоста (увеличена длина)
//         this.trail = [{ x: this.x, y: this.y }];
//         this.size = Math.random() * 0.8 + 0.8; // от 0.8 до 1.6 (чуть больше)
//         this.speed = Math.random() * 0.5 + 0.8; // от 0.8 до 1.3
//         // Угол падения: 45 градусов (45 * Math.PI / 180 = 0.698 радиан)
//         this.angle = (30 * Math.PI) / 180; // 45 градусов
//         this.opacity = Math.random() * 0.3 + 0.5; // от 0.5 до 0.8
//       }

//       update() {
//         // Сохраняем текущую позицию в историю для длинного хвоста
//         this.trail.push({ x: this.x, y: this.y });
//         // Ограничиваем длину хвоста (храним последние 20 позиций - больше хвост)
//         if (this.trail.length > 20) {
//           this.trail.shift();
//         }
        
//         // Движение звезды по диагонали (слева вверху -> справа внизу)
//         // Движение вправо
//         this.x += Math.cos(this.angle) * this.speed * 4;
//         // Движение вниз
//         this.y += Math.sin(this.angle) * this.speed * 4;

//         // Реакция на мышь
//         const dx = mouseRef.current.x - this.x;
//         const dy = mouseRef.current.y - this.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);
//         const maxDistance = 150;

//         if (distance < maxDistance) {
//           const force = (maxDistance - distance) / maxDistance;
//           const angle = Math.atan2(dy, dx);
//           this.x -= Math.cos(angle) * force * 2;
//           this.y -= Math.sin(angle) * force * 2;
//         }

//         // Если звезда ушла за экран (справа или снизу), создаем новую в левом верхнем углу
//         if (this.x > canvas.width + 100 || this.y > canvas.height + 100) {
//           this.reset();
//         }
//       }

//       draw() {
//         // Двумерное отображение - используем x и y напрямую
//         const xPos = this.x;
//         const yPos = this.y;
//         const radius = this.size;

//         if (xPos < -50 || xPos > canvas.width + 50 || yPos < -50 || yPos > canvas.height + 50) {
//           return;
//         }

//         // Рисуем длинный хвост для эффекта движения
//         if (this.trail.length > 1) {
//           ctx.beginPath();
//           ctx.moveTo(this.trail[0].x, this.trail[0].y);
          
//           // Рисуем плавную линию через все точки хвоста
//           for (let i = 1; i < this.trail.length; i++) {
//             ctx.lineTo(this.trail[i].x, this.trail[i].y);
//           }
          
//           // Градиент для хвоста (от прозрачного к более яркому)
//           const gradient = ctx.createLinearGradient(
//             this.trail[0].x, this.trail[0].y,
//             xPos, yPos
//           );
//           gradient.addColorStop(0, `rgba(106, 89, 209, 0)`);
//           gradient.addColorStop(0.5, `rgba(106, 89, 209, ${this.opacity * 0.3})`);
//           gradient.addColorStop(1, `rgba(106, 89, 209, ${this.opacity * 0.6})`);
          
//           ctx.strokeStyle = gradient;
//           ctx.lineWidth = radius * 0.8;
//           ctx.stroke();
//         }

//         // Рисуем тонкую звезду (двумерная)
//         ctx.beginPath();
//         ctx.arc(xPos, yPos, radius, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(106, 89, 209, ${this.opacity})`;
//         ctx.fill();
//       }
//     }

//     // Создание звезд
//     for (let i = 0; i < numStars; i++) {
//       stars.push(new Star());
//     }

//     // Обработчик движения мыши
//     const handleMouseMove = (e) => {
//       mouseRef.current.x = e.clientX;
//       mouseRef.current.y = e.clientY;
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     // Анимация
//     const animate = () => {
//       // Очищаем canvas (прозрачный фон - не меняем цвет фона)
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       stars.forEach(star => {
//         star.update();
//         star.draw();
//       });

//       animationFrameRef.current = requestAnimationFrame(animate);
//     };

//     animate();

//     // Очистка
//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       window.removeEventListener('mousemove', handleMouseMove);
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="stars-background" />;
// };

// export default StarsBackground;

