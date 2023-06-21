import AboutUs from './AboutUs'
import BookDetail from './BookDetail'
import Contact from './Contact'
import Homepage from './Homepage'
import './MainContent.scss'
import { Routes, Route } from 'react-router-dom'
import SubpageLayout from './SubpageLayout'

export default function MainContent({ title }) {

    return (
        <main className="main">
            <h1 className="app__headline">{ title }</h1>

            <Routes>
                <Route path='/' element={<Homepage />} />

                <Route path='/' element={ <SubpageLayout /> }>
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/contact/*' element={<Contact />} />
                <Route path='/book/:id' element={<BookDetail />} />
                <Route path='*' element={ <h1>404 page not found</h1> } />
                </Route>
            </Routes>
            
        </main>
    )
}