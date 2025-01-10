import { Navbar } from "@/components/Navbar";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern Villa with Ocean View",
    price: "$2,500",
    location: "Malibu, California",
    beds: 5,
    baths: 4,
    area: "4,500 sq ft"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Luxury Penthouse",
    price: "$3,200,000",
    location: "Beverly Hills, California",
    beds: 4,
    baths: 3,
    area: "3,800 sq ft"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Contemporary Beach House",
    price: "$4,100,000",
    location: "Newport Beach, California",
    beds: 6,
    baths: 5,
    area: "5,200 sq ft"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen hero-gradient">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Home"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Discover Your Dream Home
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Luxury real estate tailored to your lifestyle
              </p>
              <Button size="lg" className="text-lg">
                Explore Properties
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              About Luxury Estates
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With over two decades of experience in luxury real estate, we pride ourselves on 
              delivering exceptional service and finding the perfect properties for our discerning clients.
            </p>
            <Button variant="outline" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let us help you find your perfect luxury property. Contact our team of experts today.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button size="lg">
                Schedule a Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Our Listings
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;