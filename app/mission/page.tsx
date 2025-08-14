import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MissionPage() {
  return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-8">Our Mission</h1>
            <p className="text-xl mb-8">
              We believe in sustainable AI that enhances human potential. Our mission is to
              help businesses implement intelligent solutions that create lasting value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Sustainable Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We focus on AI solutions that are environmentally conscious and economically sustainable for long-term
                  business growth. Our approach considers the full lifecycle impact of AI implementations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Human-Centered AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our approach prioritizes augmenting human capabilities, ensuring AI serves as a tool for empowerment,
                  not replacement. We design solutions that enhance human decision-making and creativity.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Transparency</h3>
                <p>
                  We believe in clear communication about AI capabilities, limitations, and implementation processes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Responsibility</h3>
                <p>
                  Every AI solution we develop considers ethical implications and long-term societal impact.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Excellence</h3>
                <p>
                  We deliver high-quality, reliable AI solutions that exceed expectations and drive real business value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
