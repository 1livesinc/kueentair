import useFetch from 'hooks/useFetch';

const City = (props) => {
  const { data, loading, error } = useFetch(
    'http://192.168.1.56:8800/api/hotels/countByCity?cities=berlin,madrid,london'
  );

  return (
    <div>
      {loading ? (
        'loading please wait'
      ) : (
        <>
          <img src={props.src} alt="" className="cities" />
          <h1 className="city">{props.city}</h1>
          <p className="properties">{props.property} Properties</p>
        </>
      )}
    </div>
  );
};

export default City;
