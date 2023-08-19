type PageBackgroundProps = {
  page?: string
}

export const PageBackground = ({ page }: PageBackgroundProps) => {
  switch (page) {
    case 'home':
    default:
      return <></>
  }
}
