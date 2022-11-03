import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Container from '../../components/Container';
import Header from '../../components/Header';
import SectionList from '../../components/SectionList';
import { flexBox } from '../../styles/mixin';
import { SectionsValues, VehicleBasic } from '../../types';
import { getVehicleDetailSections } from '../../utils/utils';
import SectionHeader from './SectionHeader';
import SectionItem from './SectionItem';
import useGetVehicles from '../../hooks/useGetVehicles';
import useUpdateEffect from '../../hooks/useUpdateEffect';

function VehicleDetail() {
  const navigate = useNavigate();
  const { id = '' } = useParams();
  const { state }: { state: { vehicle: VehicleBasic } } = useLocation();
  const { isLoading, vehicles, getVehicles } = useGetVehicles();
  const [vehicle, setVehicle] = useState<VehicleBasic>(state?.vehicle);
  const [sections, setSections] = useState<SectionsValues[]>([]);

  const renderSectionHeader = (section: { title: string }) => <SectionHeader section={section} />;
  const renderSectionItem = (item: { item?: string; content: string }) => <SectionItem item={item} />;

  useEffect(() => {
    if (!state?.vehicle) {
      getVehicles();
    } else {
      setSections(getVehicleDetailSections(vehicle));
    }
  }, []);

  useUpdateEffect(() => {
    const filtered = vehicles.filter((vehicle) => vehicle.id === parseInt(id, 10))[0];

    if (!filtered) navigate('/vehicles');

    setVehicle(filtered);
  }, [vehicles]);

  useUpdateEffect(() => {
    setSections(getVehicleDetailSections(vehicle));
  }, [vehicle]);

  if (isLoading)
    return (
      <Container>
        <Notice>불러오는 중</Notice>
      </Container>
    );

  return (
    <>
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://vehicle-rental-service.vercel.app/vehicles/${vehicle?.id}`} />
        <meta property="og:title" content={`${vehicle?.attribute?.brand} | ${vehicle?.attribute?.name}`} />
        <meta property="og:description" content={`월 ${vehicle?.amount?.toLocaleString()} 원`} />
        <meta property="og:image" content={vehicle?.attribute?.imageUrl} />
      </Helmet>

      <Container>
        <Header title="차량상세" hasBackButton />
        <Image alt={vehicle?.attribute?.name} src={vehicle?.attribute?.imageUrl} />
        <Title>
          <div>{vehicle?.attribute?.brand}</div>
          <div>{vehicle?.attribute?.name}</div>
        </Title>
        <SectionItem item={{ content: `월 ${vehicle?.amount?.toLocaleString()} 원` }} />
        <SectionList sections={sections} renderSectionHeader={renderSectionHeader} renderItem={renderSectionItem} />
      </Container>
    </>
  );
}

export default VehicleDetail;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.div`
  ${flexBox('column', 'center', 'flex-start')};
  width: 100%;
  height: 92px;
  padding: 0 ${({ theme }) => theme.paddingHorizontal};
  font-weight: 700;

  > div:first-child {
    font-size: 20px;
    line-height: 24px;
  }
  > div:last-child {
    font-size: 24px;
    line-height: 29px;
  }
`;

const Notice = styled.div`
  ${flexBox()};
  width: 100%;
  height: 100vh;
  font-size: 18px;
  font-weight: 600;
`;
