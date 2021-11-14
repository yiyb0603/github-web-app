const serverSideRedirect = (url: string) => {
  return {
    redirect: {
      permanent: false,
      destination: url,
    },
    props: {},
  };
}

export default serverSideRedirect;