import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Fast. Smart. Sustainable.</h2>
                          <p className="text-xl mb-8 max-w-lg mx-auto">
                  AI Will Work is the new industry standard for sustainable AI solutions.
                </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Start Right Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            {/*<Link href="/mission">
              <Button
                size="lg"
                variant="outline"
              >
                Learn More
              </Button>
            </Link>*/}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Lead. Don't Follow.</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Become a part of the AI revolution by involving AI today and grab ahold of the top spot in your
                  industry.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">10X Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  AI will work with you to develop tools that 10x productivity and output in specific, high value areas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Reward. Not Replace.</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The true role of AI is to reward human talent and potential, empowering teams to reach new heights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
