import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProcessPage() {
  return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-8">How AI Will Work</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Our proven 4-step process ensures successful AI implementation that delivers measurable results for your
              business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  1
                </div>
                <CardTitle className="text-xl font-semibold">Discover How</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Together, we identify the most impactful ways AI can support and transform your business operations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4  text-2xl font-bold text-white">
                  2
                </div>
                <CardTitle className="text-xl font-semibold">Customized Proposal</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Receive a tailored proposal outlining how AI Will Work with objectives, scopes, deliverables and
                  timelines.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4  text-2xl font-bold text-white">
                  3
                </div>
                <CardTitle className="text-xl font-semibold">Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  AI Will Work to seamlessly integrate into your business as you realize immediate benefits and
                  improvements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4  text-2xl font-bold text-white">
                  4
                </div>
                <CardTitle className="text-xl font-semibold">Support & Explore</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We ensure your AI solution runs smoothly, knowing AI Will Work through expansion opportunities.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6 max-w-xl mx-auto">
              Let's discuss how our proven process can transform your business with sustainable AI solutions.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Start Your AI Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
  )
}
