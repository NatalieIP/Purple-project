const Sample = () => {

const namesOfFood = [ 'Pizza ', 'Chips', 'Wings']


namesOfFood.push ("Socks");
// namesOfFood.push ("Shoes");
namesOfFood.pop ("Pizza")
namesOfFood.shift ()
namesOfFood.unshift("grapes");




  return (

    <div className="sample">
        <p classname = "" >Sample for {namesOfFood.length} people </p>
    <p className="">{namesOfFood}</p>
    </div>
  );
};

export default Sample