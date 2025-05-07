import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MyMap() {
  const position = [24.228841, 55.74362];

  return (
    <section className='py-5'>
      <MapContainer center={position} zoom={15} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Smart House Location
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default MyMap;
