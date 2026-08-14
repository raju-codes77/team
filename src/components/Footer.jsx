import React from 'react';
import { ChefHat, Home, Sparkles, Users, Bot, Image as ImageIcon, Box, HelpCenter, Shield, Mail } from 'lucide-react';

const FooterPage = () => {
    return (
        <footer className="bg-[#FDF2F0] py-12 px-6 md:px-16 text-gray-700">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                
                {/* Logo & Description */}
                <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                        {/* ChefHat লোগো আইকন */}
                        <div className="w-10 h-10 bg-gradient-to-tr from-amber-500 to-red-500 rounded-xl flex items-center justify-center text-white shadow-md">
                            <ChefHat className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-lg text-gray-900">Chef's Kitchen</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                        AI powered cooking tailored to whatever is already in your fridge.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
                        <li><a href="#Features" className="hover:text-gray-900 transition-colors">Features</a></li>
                        <li><a href="#Community" className="hover:text-gray-900 transition-colors">Community</a></li>
                    </ul>
                </div>

                {/* Features */}
                <div>
                    <h3 className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-4">Features</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#AI-Generator" className="hover:text-gray-900 transition-colors">AI Generator</a></li>
                        <li><a href="#Photo-Analyzer" className="hover:text-gray-900 transition-colors">Photo Analyzer</a></li>
                        <li><a href="#Pantry-Manager" className="hover:text-gray-900 transition-colors">Pantry Manager</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-4">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#Help-Center" className="hover:text-gray-900 transition-colors">Help Center</a></li>
                        <li><a href="#Privacy" className="hover:text-gray-900 transition-colors">Privacy</a></li>
                        <li><a href="#Contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default FooterPage;