interface BooksProps{
  id: string
  title: string
  image: string
  author: string
  description: string
} 

const booksData: Array<BooksProps> = [
  {
    id: "unlimited-power-anthony-robbins",
    title: "Unlimited Power: The New Science Of Personal Achievement",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1419212761i/8676.jpg",
    author: "Anthony Robbins",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: "unshakeable-your-financial-freedom-playbook",
    title: "Unshakeable: Your Financial Freedom Playbook",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1532117333i/40885164.jpg",
    author: "Anthony Robbins",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: "personal-power",
    title: "Personal Power",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1282971295i/82060.jpg",
    author: "Anthony Robbins",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: "the-5am-club",
    title: "The 5am Club",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1594648564i/53424992.jpg",
    author: "Robin S. Sharma",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: "the-monk-who-sold-his-ferrari",
    title: "The Monk Who Sold His Ferrari: A Fable About Fulfilling Your Dreams and Reaching Your Destiny",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388189325i/43877.jpg",
    author: "Robin S. Sharma",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
]

export default booksData