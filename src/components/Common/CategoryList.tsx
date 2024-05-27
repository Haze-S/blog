import { FunctionComponent, ReactNode } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import CommonStyle from '../../styles/CommonStyle'

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

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <Container>
      {Object.entries(categoryList).map(([name]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          {name}
        </CategoryItem>
      ))}
    </Container>
  )
}

export default CategoryList

const Container = styled.div`
  display: flex;
  gap: 30px;
`

const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  color: ${({ active }) =>
    active ? CommonStyle.color.purple06 : CommonStyle.color.black};

  &:hover {
    color: ${CommonStyle.color.purple06};
  }
`
