export default function CustomButton({ url, text }) {
    return (
        <a href={url} className='button'>
            {text}
        </a>
    )
}