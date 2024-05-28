import { FunctionComponent, ReactNode } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import CommonStyle from '../../styles/CommonStyle'
import { regular15 } from '../../styles/font'

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
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          # {name}({count})
        </CategoryItem>
      ))}
    </Container>
  )
}

export default CategoryList

const Container = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
`

const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  ${regular15}
  color: ${({ active }) =>
    active ? CommonStyle.color.purple06 : CommonStyle.color.black};

  &:hover {
    color: ${CommonStyle.color.purple06};
  }
`
