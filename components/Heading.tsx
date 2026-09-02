type props = {
    title: string
}

export default function Heading({title}: props) {
    return <>
        <div>
            <h3 className="text-start mx-6 mt-15 px-6 text-4xl">{title}</h3>
            <hr className="text-white p-2" />
        </div>
    </>
}