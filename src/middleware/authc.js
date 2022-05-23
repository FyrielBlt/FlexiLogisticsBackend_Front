
export default function authc({ next, router }) {
  if (!localStorage.getItem("jwtc")) {
    return router.push({ name: 'NotFound' });
  }

  return next();
}
