import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRouter, RouterProvider, createRoute, createRootRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Imports
import Root from './routes/__root'
import Index from './routes/index'
import MyStory from './routes/my-story'
import TheBook from './routes/the-book'
import PublicService from './routes/public-service'
import Media from './routes/media'
import Blog from './routes/blog'
import Contact from './routes/contact'
import './styles.css'

const queryClient = new QueryClient()

// 1. Root
const rootRoute = createRootRoute({ component: Root })

// 2. Routes
const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Index })
const storyRoute = createRoute({ getParentRoute: () => rootRoute, path: '/my-story', component: MyStory })
const bookRoute = createRoute({ getParentRoute: () => rootRoute, path: '/the-book', component: TheBook })
const serviceRoute = createRoute({ getParentRoute: () => rootRoute, path: '/public-service', component: PublicService })
const mediaRoute = createRoute({ getParentRoute: () => rootRoute, path: '/media', component: Media })
const blogRoute = createRoute({ getParentRoute: () => rootRoute, path: '/blog', component: Blog })
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact', component: Contact })

// 3. Tree
const routeTree = rootRoute.addChildren([
  indexRoute, storyRoute, bookRoute, serviceRoute, mediaRoute, blogRoute, contactRoute
])

const router = createRouter({ routeTree })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)