import styled from 'styled-components';

function px2rem(pxValue) {
    const rem = 37.5;
    return `${pxValue / rem}rem`;
}

const HomeHeaderWrapper = styled.div`
	position: relative;
	.banner-img {
		width:100%;
		height:${px2rem(178)};
	}
`;

export default HomeHeaderWrapper;
