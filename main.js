onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  document.querySelectorAll('.flower').forEach((flower) => {
    flower.addEventListener('click', () => {
        flower.classList.toggle('active');
    });
});
