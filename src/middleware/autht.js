export default function autht({ next, router }) {
  if (!localStorage.getItem("jwtt")) {
    return router.push({ name: 'NotFound' });
  }

  return next();
}
