const twitter = (text, url) => {
  return window.open(
    `http://twitter.com/share?url=${url}&text=${text}`,
    "tshare",
    "height=260,width=550,resizable=0,toolbar=0,menubar=0,status=0,location=0"
  );
};

const facebook = (text, url) => {
  return window.open(
    `http://facebook.com/sharer.php?u=${url}`,
    "fbshare",
    "height=260,width=550,resizable=0,toolbar=0,menubar=0,status=0,location=0"
  );
};

const handlers = {
  facebook,
  twitter
};

export default handlers;
