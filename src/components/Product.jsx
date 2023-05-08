function Products() {
    const { data, loading, error } = useFetch('products');
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>{error.message}</div>;
    }
  
    return (
      <>
        <h1 className="lsheading">📜Item List📜</h1>
        <div className="list">
          {data.map(product => (
            <div className="itemnum" key={product.id}>
              <NavLink to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </>
    );
  }
  