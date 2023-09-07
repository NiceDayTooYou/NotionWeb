document.addEventListener('DOMContentLoaded', (event) => {
  const link = document.createElement('link');
  link.href = '/public/webfonts/Yozai-Medium.ttf'; // 将路径替换为您的字体文件的实际路径
  link.rel = 'stylesheet';
  link.type = 'text/css';
  document.head.appendChild(link);
});
