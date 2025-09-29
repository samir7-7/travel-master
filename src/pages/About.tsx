import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-thailand.jpg";
import { useEffect } from "react";
import OfficeMap from "@/components/OfficeMap";

const About = () => {
  useEffect(() => {
    document.title = 'About Travel Master Thailand | Expert Thailand Travel Company';
  
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    return () => {
      if (document.body.contains(skipLink)) {
        document.body.removeChild(skipLink);
      }
    };
  }, []);

  const teamMembers = [
    {
      name: "Mohan",
      position: "CEO",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Mohan is a serial entrepreneur, international hotelier. He is into travel business since more than a decade with full of knowledge from many countries like – Thailand, Dubai, Azerbaijan, Singapore, Malaysia, Indonesia, Spain, Italy, Netherlands and many more into his network group."
    },
    {
      name: "Shan",
      position: "COO",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "A seasoned travel professional with decades of experience in tourism, specializing in sales and operations for renowned companies like SOTC and Thomas Cook. Currently managing inbound sales and operations in Thailand, delivering exceptional travel experiences with expertise and passion."
    },
    {
      name: "Damini",
      position: "OPERATION MANAGER",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Damini is a highly motivated and dynamic professional who oversees the daily operations of the organization while coordinating with all departments. She holds a Master's degree in Tourism Management and has previously worked with a well-known airline before joining our team."
    },
    {
      name: "Rohsan Sapkota",
      position: "BUSINESS HEAD - NEPAL, MYANMAR",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Rohsan Sapkota is a seasoned businessman who explored various ventures before embracing his passion for travel, now successfully manages inbound tourism to Thailand. at Travel Master, he handles the oversee business in Nepal and Myanmar, where he actively promotes Thailand to eager travelers from these regions."
    },
    {
      name: "You!",
      position: "ANY POSITION",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "If you have a background in tourism or a genuine interest in the travel and tourism industry, we are always seeking talented individuals to join our team. If you share our passion for what we do, reach out to us with your case study to explore potential opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main id="main-content" role="main">
        {/* Hero Section with Background Image */}
        <section 
          className="relative pt-32 pb-16 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/3732494/pexels-photo-3732494.jpeg')`
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Our Story
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Travel is more than just visiting new places; it is about creating lasting memories, 
                experiencing new cultures, and discovering yourself along the way.
              </p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <img 
                    src="https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Travel Master Thailand team"
                    className="w-full h-[500px] object-cover rounded-lg shadow-medium"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-4xl font-bold text-foreground mb-6">About Us</h2>
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      Travel Master DMC is a premier tour operator and destination management company, 
                      offering comprehensive travel management services in both Thailand and the UAE. 
                      We are proud to deliver B2B, Group, and MICE services, ensuring exceptional 
                      experiences for all our clients.
                    </p>
                    <p>
                      In Thailand, we operate under the Tourism Authority of Thailand (TAT) License No. 14/03283, 
                      and in the UAE, we are licensed as an inbound tour operator under the Dubai Trade License No. 961780. 
                      Additionally, we are esteemed members of the official Association of Thai Travel Agents (ATTA) 
                      and the Dubai Travel & Tour Agents Group.
                    </p>
                    <p>
                      Our commitment to excellence and our extensive network enable us to provide unparalleled services, 
                      making Travel Master DMC a trusted partner for all your travel needs.
                    </p>
                    <p>
                      As a destination management company, we specialize in providing comprehensive travel management 
                      services that cater to the diverse needs of our clients. Our team consists of experienced 
                      professionals with extensive knowledge and expertise in the travel industry, enabling us to 
                      deliver tailored solutions and personalized experiences to our clients.
                    </p>
                    <p className="font-semibold text-foreground">
                      Our commitment to excellence, attention to detail, and customer satisfaction is at the heart of everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-24 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Meet the Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Bringing Together Diverse Skills and Experience to Deliver Exceptional Results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-0 shadow-medium bg-card hover:shadow-strong transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <img 
                        src={member.image}
                        alt={`${member.name} - ${member.position}`}
                        className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-medium"
                      />
                      <div className="text-sm font-semibold text-primary mb-1 uppercase tracking-wide">
                        {member.position}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {member.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      
        {/* CTA Section */}
        <section className="py-24 bg-gradient-primary bg-blue-500 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Join Our Success Story?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let our experienced team create the perfect Thailand experience tailored just for you.
              </p>
              <button 
                onClick={() => window.open('https://wa.me/REPLACE_WITH_WHATSAPP_NUMBER', '_blank')}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300 shadow-medium hover:shadow-strong"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;