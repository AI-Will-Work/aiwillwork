import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Ready to transform your business with AI? Let's discuss how AI Will Work for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p>info@aiwillwork.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p>+1 (704) 594-1105</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p>Remote & On-site Consultations</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium">Response Time</h3>
                    <p>24-48 hours</p>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Free initial consultation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Timely custom proposal</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>No obligation to proceed</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">Start Your AI Journey</CardTitle>
                <CardDescription>
                  Schedule a consultation to discover how AI can transform your business
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow mt-3">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="firstName">First Name</label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="lastName">Last Name</label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="company">Company</label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                  <Textarea 
                    id="message" 
                    rows={4} 
                    className="max-h-40 resize-y" 
                    placeholder="Tell us about your AI needs, current challenges, and goals..." 
                  />
                </div>

              </CardContent>
              <CardFooter>
                <Button className="w-full py-3">Send Message</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
  )
}
