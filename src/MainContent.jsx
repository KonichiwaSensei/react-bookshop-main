import './MainContent.scss'

export default function MainContent({ title }) {

    return (
        <main className="main">
            <h1 className="app__headline">{ title }</h1>
        </main>
    )
}