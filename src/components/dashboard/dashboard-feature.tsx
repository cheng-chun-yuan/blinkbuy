import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bitcoin, CreditCard, Gift, Link } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Solana Shop
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  The future of e-commerce powered by Solana blockchain. Shop with crypto, earn NFTs, and join exclusive
                  group buys.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Start Shopping</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Gift className="w-10 h-10 mb-2" />
                  <CardTitle>NFT Membership Cards</CardTitle>
                  <CardDescription>Access exclusive benefits and track your spending with digital NFT-based membership cards.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Bitcoin className="w-10 h-10 mb-2" />
                  <CardTitle>Crypto Payments</CardTitle>
                  <CardDescription>Seamlessly pay with your favorite cryptocurrencies for a true Web3 shopping experience.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CreditCard className="w-10 h-10 mb-2" />
                  <CardTitle>Secondary Resale Market</CardTitle>
                  <CardDescription>Buy and sell unique items in our blockchain-powered secondary marketplace.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Group Purchases</h2>
            <div className="flex flex-col items-center space-y-4 text-center">
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Join collective buying deals through a simple Blink link. Experience transparent and efficient group shopping.
              </p>
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>Join a Group Buy</CardTitle>
                  <CardDescription>Enter a Blink link to join a group purchase</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="flex space-x-2">
                    <Input placeholder="Enter Blink link" />
                    <Button type="submit">Join</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to get started?</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Join the revolution in Web3 e-commerce. Shop, earn, and connect like never before.
              </p>
              <Button size="lg">Contact Us</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 BlinkBuy. All rights reserved.</p>
      </footer>
    </div>
  )
}
