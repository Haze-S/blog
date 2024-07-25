import { ReactNode } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import CommonStyle from '../../styles/CommonStyle'
import { regular12, regular16 } from '../../styles/font'

type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

function CategoryList({ selectedCategory, categoryList }: CategoryListProps) {
  return (
    <Container>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          👾 {name}({count})
        </CategoryItem>
      ))}
    </Container>
  )
}

export default CategoryList

const Container = styled.div`
  display: flex;
  gap: 23px;
  padding: 20px 10px;
`

const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  font-family: 'Silkscreen', sans-serif;
  ${regular16}
  color: ${({ active }) =>
    active ? CommonStyle.color.purple06 : CommonStyle.color.black};

  &:hover {
    color: ${CommonStyle.color.purple06};
  }

  @media (max-width: 768px) {
    ${regular12}
  }
`
