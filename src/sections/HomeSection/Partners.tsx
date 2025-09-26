import { Building2 } from 'lucide-react'

function Partners() {
    return (
        <section id="clients" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Trusted Partners</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We've built strong partnerships with industry leaders who trust us to deliver
                        exceptional talent for their organizations.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                    {[
                        'TechCorp', 'InnovateLabs', 'GlobalSoft', 'DataDyne', 'CloudNine', 'FutureTech',
                        'DigitalEdge', 'SmartSys', 'NextGen', 'ProTech', 'MegaCorp', 'EliteSoft'
                    ].map((company, index) => (
                        <div key={index} className="bg-blue-50 p-6 rounded-xl text-center hover:bg-gray-100 transition-colors">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                                <Building2 className="h-6 w-6  text-[#1F497D]" />
                            </div>
                            <h3 className="font-semibold text-gray-700">{company}</h3>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold  text-[#1F497D] mb-2">500+</div>
                            <div className="text-gray-600">Partner Companies</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                            <div className="text-gray-600">Placement Success Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
                            <div className="text-gray-600">Successful Placements</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners