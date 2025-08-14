import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TeamPage() {
  return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-8">Meet the Team</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Our diverse team of AI experts, business strategists, and technical specialists work together to deliver
              sustainable AI solutions that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <Card className="max-w-md">
              <CardHeader>
                <img src="/nick.png" alt="Nick Spiers" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                <CardTitle className="text-xl text-center">Nick Spiers</CardTitle>
                <CardDescription className="text-center">Founder</CardDescription>
              </CardHeader>
              <CardContent>
                  With over fifteen years in software development and technical leadership, I specialize in making AI practical for real-world business. Dual US/UK citizen and Western Carolina University alum, I’ve served as CTO in crypto and digital media and am passionate about building stable, scalable solutions—from cloud infrastructure to automated workflows.
              </CardContent>
            </Card>

            <Card className="max-w-md">
              <CardHeader>
                <img src="/george.png" alt="George Crump" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                <CardTitle className="text-xl text-center">George Crump</CardTitle>
                <CardDescription className="text-center">Co-Founder</CardDescription>
              </CardHeader>
              <CardContent>
                  I bring twenty years of entrepreneurship, coaching, and leadership experience to move Involving AI forward with purpose and energy. I grew up on a farm in Scotland, built a business in the Carolinas, and now live in the Colorado mountains.  My purpose is to help others achieve entrepreneurial freedom, and I see Involving AI as part of that journey.
              </CardContent>
            </Card>

            <Card className="max-w-md">
              <CardHeader>
                <img src="/lauren.png" alt="Lauren Spiers" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                <CardTitle className="text-xl text-center">Lauren Spiers</CardTitle>
                <CardDescription className="text-center">Co-Founder</CardDescription>
              </CardHeader>
              <CardContent>
                  I bring passion, energy, and a people-first mindset to everything I do. After earning my degree in Elementary Education and Literacy from West Chester University, my career journey began as an elementary teacher before I transitioned into the fast-paced world of tech. Alongside my husband Nick, and our business coach and friend George, we co-founded Involving AI to help businesses thrive by harnessing the power of AI solutions.
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Why Choose Our Team?</h2>
              <p className="max-w-2xl mx-auto">
                We combine deep technical expertise with business acumen to deliver AI solutions that truly work for
                your organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="justify-center mx-auto">
                <h3 className="text-lg font-semibold mb-3">Proven Track Record</h3>
                <p className="max-w-md">
                  Successfully implemented AI solutions across various industries, from startups to enterprise
                  organizations.
                </p>
              </div>
              <div className="justify-center mx-auto">
                <h3 className="text-lg font-semibold mb-3">Continuous Learning</h3>
                <p className="max-w-md">
                  Our team stays at the forefront of AI developments, ensuring you benefit from the latest innovations.
                </p>
              </div>
              <div className="justify-center mx-auto">
                <h3 className="text-lg font-semibold mb-3">Ethical Implementation</h3>
                <p className="max-w-md">
                  We prioritize ethical AI development that respects privacy and ensures transparency.
                </p>
              </div>
              <div className="justify-center mx-auto">
                <h3 className="text-lg font-semibold mb-3">Tailored Approach</h3>
                <p className="max-w-md">
                  Every organization has unique needs and challenges. Our team tailors to your needs with customized AI solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
