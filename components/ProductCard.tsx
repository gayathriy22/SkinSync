import React from "react";

interface ProductCardProps {
  name: string;
  ingredients: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, ingredients, imageUrl }) => {
  return (
    <div className="w-[40vw] bg-pink-100 border-2 border-pink-400 rounded-lg shadow-md overflow-hidden" style={{
      color: '#1a202c',
    }}>
      <div className="flex h-[calc(40vw*0.3)]">
        <div className="w-1/3 p-[0.8vw] flex items-center justify-center">
          <img 
            className="w-full h-full object-cover rounded"
            src={imageUrl}
            alt={name}
          />
        </div>
        <div className="w-2/3 p-[0.8vw] flex flex-col justify-center">
          <h2 className="text-[1.8vw] font-bold mb-[0.5vw] text-center">{name}</h2>
          <div className="text-center">
            <h3 className="text-[1.3vw] font-semibold mb-[0.3vw]">Ingredients:</h3>
            <p className="text-[1vw]">{ingredients}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage
const ExampleUsage = () => {
  const imageUrl = "https://images.unsplash.com/photo-1613803745799-ba6c10aace85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHNraW5jYXJlJTIwYm90dGxlc3xlbnwwfHwwfHx8MA%3D%3D";

  return (
    <ProductCard 
      name="Hydrating Face Cream"
      ingredients="Water, Glycerin, Cetearyl Alcohol, Caprylic/Capric Triglyceride, Ceteareth-20, Dimethicone, Phenoxyethanol, Carbomer, Ethylhexylglycerin, Sodium Hydroxide, Disodium EDTA"
      imageUrl={imageUrl}
    />
  );
};

export default ExampleUsage;