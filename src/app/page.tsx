import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <img
          src="/A54B3398-9689-4508-9F56-F2227D75AEA5.png"
          alt="Navkala Logo"
          className="h-12"
        />
        <nav className="space-x-6 font-semibold">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#products" className="hover:text-blue-600">Products</a>
          <a href="#industries" className="hover:text-blue-600">Industries</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-50">
        <h1 className="text-4xl font-bold text-blue-700">Welcome to Navkala Plastic Industries</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Your trusted manufacturer of high-quality plastic bottle caps for every industry.
        </p>
        <Button className="mt-6 text-white bg-blue-600 hover:bg-blue-700">Explore Products</Button>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg">
          With decades of expertise in plastic manufacturing, Navkala Plastic Industries delivers durable, innovative, and precision-molded caps that meet the needs of a wide range of industries, including beverages, pharmaceuticals, cosmetics, and more.
        </p>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Flip Top Caps",
            "Screw Caps",
            "Spout Caps",
            "Child-resistant Caps",
            "Measuring Caps",
            "Custom Molded Caps",
          ].map((cap, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cap}</h3>
                <p>High-quality and customizable options for a wide range of applications.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto">
          {["Beverages", "Pharmaceuticals", "Cosmetics", "Household Goods"].map((industry, i) => (
            <div key={i} className="border p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold">{industry}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Contact Us</h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="mb-4">For business inquiries or custom orders, reach out to us:</p>
          <p><strong>Email:</strong> info@navkalaplastics.com</p>
          <p><strong>Phone:</strong> +91-9876543210</p>
          <p className="mt-2">Ahmedabad, Gujarat, India</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 border-t">
        <p className="text-sm">&copy; {new Date().getFullYear()} Navkala Plastic Industries. All rights reserved.</p>
      </footer>
    </div>
  );
}
