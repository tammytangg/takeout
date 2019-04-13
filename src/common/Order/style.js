import styled from 'styled-components';

function px2rem(pxValue) {
    const rem = 37.5;
    return `${pxValue / rem}rem`;
}

const OrderWrapper = styled.div`
`;

const HeaderWrapper = styled.div`
	width: 100%;
	height: ${px2rem(64)};
	background-color: #fff;
	border-bottom: ${px2rem(1)} solid #b2b2b2;
	font-size: ${px2rem(20)};
	color: #333;
	text-align: center;
	line-height: ${px2rem(64)};
	font-weight: bold;
`;

export { OrderWrapper, HeaderWrapper };
