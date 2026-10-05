import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <main className="relative flex min-h-[80vh] flex-col items-center justify-center gap-4 px-6 pt-24 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-muted-foreground">There's nothing at this address.</p>
      <Link to="/" className="cosmic-button mt-2">
        Back to the homepage
      </Link>
    </main>
  )
}
