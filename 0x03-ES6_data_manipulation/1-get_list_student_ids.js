export default function getListStudentIds(arg) {
  let newArg = [];
  
  if (arg instanceof Array) {
    newArg = arg.map((item) => item.id);
  }
  return newArg;
}
