import styled from 'styled-components';

function px2rem(pxValue) {
    const rem = 37.5;
    return `${pxValue / rem}rem`;
}

const CategoryWrapper = styled.div`
   padding-bottom: ${px2rem(10)};
`;

const CategoryItem = styled.div`
	float: left;
	width: 25%;
	padding-top: ${px2rem(14)};
	font-size: ${px2rem(13)};
	display: flex;
	flex-direction: column;
	align-items: center;
	.item-icon{
		width: ${px2rem(47)};
	}
	.item-name{
		margin-top: ${px2rem(14)};
	}
`;

export { CategoryWrapper, CategoryItem };
