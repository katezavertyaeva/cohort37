export let lionData = {
  name: "Alex",
  species: "Lion",
  image:
    "https://img.freepik.com/free-photo/cute-lion-nature-outdoors_23-2150813253.jpg?t=st=1713338293~exp=1713341893~hmac=1439b73aedcfad1324b607543807963d7c5774877d4b0043b2cb55bd0bca565e&w=740",
};

export let zebraData = {
  name: "Marty",
  species: "Zebra",
  image:
    "https://img.freepik.com/premium-photo/meet-adorable-3d-baby-zebra-with-big-expressive-eyes-that-will-melt-your-heart-this-cartoon-cr_1032785-4269.jpg?w=740",
};

export const normalizeName = (name) => {
  let newName = name.toUpperCase();
  return newName;
};
