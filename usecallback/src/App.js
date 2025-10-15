import React, { useState, useCallback , useMemo} from "react";


export default function ServiceSearch() {
  const [hello, setHello] = useState("");
  const [search ,setSearch] = useState("");
  const[count ,setCount] = useState(0);



      const Service = [
        "Web Development",
        "App Development",
        "SEO Optimization",
        "Digital Marketing",
        "Content Creation",
        "Graphic Design",
        "Social Media Management",
        "Email Marketing",
        "Video Production",
        "UX/UI Design"
      ]
 
       const filteredService = useMemo(() => {
    console.log("Filtering services...");
    return Service.filter((service) =>
      service.toLowerCase().includes(search.toLowerCase())
    );
  },[search]);













  const handleSearch = useCallback((event) => {
    setHello(event.target.value);
    console.log("Searching for:", event.target.value);
  }, []);
            





  return (
    <>
     <div className="container py-5">
      <h3 className="mb-3 text-center">Search Services</h3>
      <input
        type="text"
        placeholder="Type to search..."
        className="form-control w-50 mx-auto"
        value={hello}
        onChange={handleSearch}
      />
      <p className="text-center mt-3">
        🔍 You are searching for: <strong>{hello}</strong>
      </p>
    </div>




    <h2 style={{textAlign:"center", color:"red" , fontFamily:"inherit",fontStyle:"italic"}}>
      use Memo 
    </h2>  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
     <div className="container py-5">
      <h3>useMemo Example</h3>
      <input
        type="text"
        placeholder="Search service..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control w-50 mb-3"
      />

      <ul>
        {filteredService.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button
        className="btn btn-secondary mt-3"
        onClick={() => setCount(count + 1)}
      >
        Increase Count ({count})
      </button>
    </div>
  


    
    
    
    
    
    
    
     </>
   
  );
}
