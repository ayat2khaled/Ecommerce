import React, { useState } from 'react';
import Ccard from "./ccard";
import Alert from "./Alert";
import canonLogo from '../../assets/imagesBrands/1678286824747.png'
import dellLogo from '../../assets/imagesBrands/1678286767914.png'
import lenovoLogo from '../../assets/imagesBrands/1678286730980.png'
import sonyLogo from '../../assets/imagesBrands/1678286680638.png'
import infinixLogo from '../../assets/imagesBrands/1678286620402.png'
import realmeLogo from '../../assets/imagesBrands/1678286577463.png'
import honorLogo from '../../assets/imagesBrands/1678286539788.png'
import nokiaLogo from '../../assets/imagesBrands/1678286502288.png'
import oppoLogo from '../../assets/imagesBrands/1678286465856.png'
import huaweiLogo from '../../assets/imagesBrands/1678286421517.png'
import appleLogo from '../../assets/imagesBrands/1678286391415.png'
import xiaomiLogo from '../../assets/imagesBrands/1678286366797.png'
import samsungLogo from '../../assets/imagesBrands/1678286321029.png'
import jackJonesLogo from '../../assets/imagesBrands/1678286281363.png'
import lcWaikikiLogo from '../../assets/imagesBrands/1678286238428.png'
import andoraLogo from '../../assets/imagesBrands/1678286204060.png'
import pumaLogo from '../../assets/imagesBrands/1678286172219.png'
import skechersLogo from '../../assets/imagesBrands/1678286142113.png'
import reservedLogo from '../../assets/imagesBrands/1678286099850.png'
import reebokLogo from '../../assets/imagesBrands/1678286058845.png'
import adidasLogo from '../../assets/imagesBrands/1678285881943.png'
import nikeLogo from '../../assets/imagesBrands/1678285837630.png'
import defactoLogo from "../../assets/imagesBrands/1678285758109.png"
import bekoLogo from '../../assets/imagesBrands/1678285724527.png'
import kenwoodLogo from '../../assets/imagesBrands/1678285698559.png'
import blackDeckerLogo from '../../assets/imagesBrands/1678285650508.png'
import mientaLogo from '../../assets/imagesBrands/1678285592826.png'
import freshLogo from '../../assets/imagesBrands/1678285558892.png'
import philipsLogo from '../../assets/imagesBrands/1678285517454.png'
import toshibaLogo from '../../assets/imagesBrands/1678285481289.png'
import tornadoLogo from '../../assets/imagesBrands/1678285447068.png'
import braunLogo from '../../assets/imagesBrands/1678285367650.png'
import garnierLogo from '../../assets/imagesBrands/1678285324193.png'
import essenceLogo from '../../assets/imagesBrands/1678285277076.png'
import bourjoisLogo from '../../assets/imagesBrands/1678285240940.png'
import kemeiLogo from '../../assets/imagesBrands/1678285201152.png'
import carolinaHerreraLogo from '../../assets/imagesBrands/1678285115409.png'
import calvinKlienLogo from '../../assets/imagesBrands/1678285065497.png'
import lorealLogo from '../../assets/imagesBrands/1678285025559.png'
import maybellineLogo from '../../assets/imagesBrands/1678284642946.png'

function Brands() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const brands = [
    { id: 1, name: 'Canon', logo: canonLogo  },
    { id: 2, name: 'Dell', logo: dellLogo },
    { id: 3, name: 'Lenovo', logo: lenovoLogo },
    { id: 4, name: 'Sony', logo: sonyLogo  },
    { id: 5, name: 'Infinix', logo: infinixLogo },
    { id: 6, name: 'Realme', logo: realmeLogo },
    { id: 7, name: 'HONOR', logo: honorLogo},
    { id: 8, name: 'Nokia', logo: nokiaLogo },
    { id: 9, name: 'Oppo', logo: oppoLogo  },
    { id: 10, name: 'Huawei', logo: huaweiLogo },
    { id: 11, name: 'Apple', logo: appleLogo},
    { id: 12, name: 'Xiaomi', logo: xiaomiLogo },
    { id: 13, name: 'Samsung', logo: samsungLogo},
    { id: 14, name: 'Jack & Jones', logo: jackJonesLogo },
    { id: 15, name: 'LC Waikiki', logo: lcWaikikiLogo },
    { id: 16, name: 'Andora', logo: andoraLogo},
    { id: 17, name: 'Puma', logo:  pumaLogo },
    { id: 18, name: 'Skechers', logo: skechersLogo },
    { id: 19, name: 'Reserved', logo: reservedLogo},
    { id: 20, name: 'Reebok', logo: reebokLogo },
    { id: 21, name: 'Adidas', logo: adidasLogo  },
    { id: 22, name: 'Nike', logo:  nikeLogo  },
    { id: 23, name: 'Defacto' , logo: defactoLogo},
    { id: 24, name: 'Beko', logo: bekoLogo   },
    { id: 25, name: 'Kenwood', logo: kenwoodLogo},
    { id: 26, name: 'Black + Decker', logo: blackDeckerLogo},
    { id: 27, name: 'Mienta', logo: mientaLogo },
    { id: 28, name: 'Fresh', logo: freshLogo  },
    { id: 29, name: 'Philips', logo: philipsLogo },
    { id: 30, name: 'Toshiba', logo: toshibaLogo },
    { id: 31, name: 'Tornado', logo: tornadoLogo },
    { id: 32, name: 'Braun', logo: braunLogo },
    { id: 33, name: 'Garnier', logo: garnierLogo  },
    { id: 34, name: 'Essence', logo: essenceLogo  },
    { id: 35, name: 'Bourjois', logo: bourjoisLogo  },
    { id: 36, name: 'Kemei', logo:  kemeiLogo },
    { id: 37, name: 'Carolina Herrera', logo: carolinaHerreraLogo },
    { id: 38, name: 'Calvin Klein', logo: calvinKlienLogo },
    {id: 39, name: 'Loreal', logo: lorealLogo  },
    {id: 40, name: 'Maybelline', logo: maybellineLogo  },
  ];
  const handleCardClick = (brand) => {
    setSelectedBrand(brand); 
  };

  const handleCloseAlert = () => {
    setSelectedBrand(null); 
  };
 
  return (
    <div className="p-3">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary-800">All Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4" >
        {brands.map((brand) => (
          <Ccard key={brand.id} brand={brand} onClick={handleCardClick} />
          
        ))}
      </div>
      {selectedBrand && (
        <Alert
          title={selectedBrand.name}
          description={selectedBrand.description}
          image={selectedBrand.logo}
          onClose={handleCloseAlert}
        />
      )}
    </div>
  
  );
}

export default Brands;