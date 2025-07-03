const Sample = () => {

const namesOfFood = [ 'Pizza ', 'Chips', 'Wings'];


namesOfFood.push ("Socks");
namesOfFood.push ("Shoes");
namesOfFood.pop ("Shoes");
namesOfFood.shift ();
namesOfFood.unshift("grapes");

const sliceResult = namesOfFood.slice (0,2);




  return (

    <div className="sample">
        <p className = "">Sample for {namesOfFood.length} people </p>
    <p className="">{namesOfFood}</p>
   <p className>{sliceResult}</p>
    </div>
  );
};

export default Sample