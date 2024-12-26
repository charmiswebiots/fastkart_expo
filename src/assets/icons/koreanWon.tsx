import Svg, {
	Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";

export function koreanWon() {
	const { colors } = useTheme();
	return (
		<Svg xmlns="http://www.w3.org/3000/svg" width={windowWidth(29)} height={windowHeight(29)} enable-background="new 0 0 460 460" viewBox="0 0 460 460">
			<Path fill={colors.text} d="M230,2.22C104.2,2.22,2.22,104.2,2.22,230.001C2.22,355.8,104.2,457.78,230,457.78
				S457.78,355.8,457.78,230.001C457.78,104.2,355.8,2.22,230,2.22z M230,411.513c-100.246,0-181.513-81.266-181.513-181.512
				c0-100.248,81.267-181.514,181.513-181.514s181.513,81.266,181.513,181.514C411.513,330.247,330.246,411.513,230,411.513z"/>
			<Path fill="#0BAF9A" d="M358.84,213.5c3.309,0,4.66-2.592,4.66-5.233v-19.103c0-2.642-1.352-3.664-4.66-3.664h-20.207
	l4.85-21.654c1.828-8.113,2.745-14.217,2.745-17.914c0-5.226-1.685-9.677-5.054-13.148c-3.369-3.469-7.468-5.255-12.291-5.255
	c-4.826,0-8.507,1.328-11.043,4.032c-2.539,2.704-4.327,5.757-5.367,9.181c-1.04,3.428-2.143,8.553-3.307,14.592l-5.503,30.167
	h-40.585l-4.949-22.736c-2.245-8.925-4.035-15.524-5.365-19.4c-1.332-3.875-3.724-7.558-7.175-10.849
	c-3.454-3.29-8.299-4.986-14.537-4.986c-6.157,0-11.024,1.553-14.601,4.708c-3.577,3.156-6.157,6.884-7.736,11.21
	c-1.582,4.326-3.369,11.031-5.365,19.324l-4.904,22.73h-40.381l-5.503-30.173c-1.747-8.925-3.786-15.93-6.114-20.618
	c-2.33-4.686-6.863-7.13-13.602-7.13c-4.909,0-9.028,1.708-12.354,5.223c-3.329,3.515-4.992,7.817-4.992,12.955
	c0,4.057,0.915,10.35,2.746,18.102l4.85,21.642h-20.606c-3.308,0-6.989,1.022-6.989,3.664v19.103c0,2.642,3.682,5.233,6.989,5.233
	h26.994l3.194,14h-30.188c-3.308,0-6.989,1.181-6.989,3.821v19.103c0,2.642,3.682,6.076,6.989,6.076h36.805l9.399,40.797
	c0.914,3.97,1.953,8.072,3.119,12.714c1.164,4.643,2.662,8.552,4.492,11.935c1.829,3.379,4.222,5.944,7.176,7.79
	c2.952,1.848,6.716,2.749,11.292,2.749c5.656,0,10.19-1.569,13.602-4.678c3.411-3.11,5.804-6.633,7.176-10.553
	c1.373-3.922,3.224-9.991,5.553-19.006l10.62-41.748h38.416l10.486,41.745c2.412,9.285,4.284,15.643,5.615,19.472
	c1.33,3.834,3.701,7.182,7.113,10.244c3.41,3.064,7.943,4.548,13.602,4.548c5.99,0,10.626-1.603,13.913-4.757
	c3.285-3.155,5.615-6.841,6.988-11.032c1.372-4.191,3.098-10.401,5.178-19.417l9.399-40.803h36.406c3.309,0,4.66-3.435,4.66-6.076
	v-19.103c0-2.641-1.352-3.821-4.66-3.821h-29.789l3.193-14H358.84z M231.052,179.795l1.419,5.705h-2.856L231.052,179.795z
	 M163.239,213.5h29.059l-3.074,14h-23.396L163.239,213.5z M176.521,285.356l-5.333-28.856h11.669L176.521,285.356z M219.03,227.5
	l3.528-14h16.88l3.483,14H219.03z M285.207,285.356l-6.395-28.856h11.729L285.207,285.356z M295.9,227.5h-23.515l-3.103-14h29.205
	L295.9,227.5z"/>
		</Svg>
	)
}