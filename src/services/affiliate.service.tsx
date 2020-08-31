import React, { ReactText } from 'react';
import { ValueType } from 'react-select';
import { useHistory } from 'react-router-dom';
import { Request, HttpService } from './http.service';

const dummyAffiliate: AffiliateData = {
  active: false,
  address: '',
  affiliate: 0,
  birthday: new Date(),
  city: '',
  department: '',
  district: '',
  fee: 0,
  id: 0,
  identity: 0,
  law: 0,
  license: 0,
  name: '',
  inactiveReason: '',
  contact: {
    id: 0,
    number: 0,
    data: '',
  },
  registeredAt: new Date(),
  state: '',
  members: [],
  payRegistries: [],
};

export type AffiliateSimple = {
  affiliate: number;
  name: string;
};

export type Member = {
  affiliate: number;
  birthday?: Date;
  dni?: number
  fee: {
    name: string,
    value: number,
  };
  id: number;
  name: string;
  relation: string;
  self: boolean;
  active: boolean;
  inactiveReason: string,
};

export type PayRegistry = {
  id: number,
  identity: number,
  benefit: number,
  import: number,
  code: number,
  period: string,
  periodCode: number,
};

export type AffiliateData = {
  active: boolean;
  address: string;
  affiliate: number;
  birthday: Date;
  city: string;
  department: string;
  district: string;
  fee: number;
  id: number;
  identity: number;
  law: number;
  license: number;
  name: string;
  inactiveReason: string;
  contact: {
    id: number,
    number: number,
    data: string,
  },
  registeredAt: Date;
  state: string;
  members: Member[];
  payRegistries: PayRegistry[];
};

export type AffiliateFormData = {
  name: string;
  birthday: string;
  identiy: ReactText;
  address: string;
  district: string;
  city: string;
  department: string;
  state: ValueType<{ value: number; label: string; }>
  phone: ReactText;
  law: ReactText;
  license: ReactText;
  funeralService: ReactText;
  members: MemberFormData[];
  funeralFee: number,
};

export type AffiliateCensus = {
  affiliate: number;
  id: number;
  active: boolean;
  birthday: Date;
  city: string;
  department: string;
  identity: number;
  law: number;
  license: number;
  name: string;
  registeredAt: Date;
};

export type MemberFormData = {
  birthday: string;
  dni: string;
  fee: string;
  name: string;
  relation: string;
  id?: number;
};

type InitialState = {
  query: string;
  onSearchSubmit: (value: string) => void;
  results: AffiliateSimple[];
  affiliate: AffiliateData;
  getAffiliate: (value: number) => void;
  onMemberOrAffiliateActivation: (
    active: string,
    reason: string,
    type: 'affiliate' | 'member',
    member?: number,
  ) => Promise<unknown>;
  onAffiliateFuneralServiceActivation: (active: boolean) => Promise<unknown>;
  onAffiliateUpdate: (value: string, value2: string) => Promise<unknown>;
  onMemberUpdate: (value: string, value2: string, value3: number) => (
    Promise<unknown>
  );
  createMember: (formData: {
    name: string,
    birthday: string,
    dni: string,
    relation: string,
    fee: string,
  }) => Promise<unknown>;
  getStates: () => Promise<{value: number, label: string}[]>,
  getFees: () => Promise<{id: number, name: string, value: number}[]>,
  createAffiliate: (data: AffiliateFormData) => Promise<unknown>;
  getAll: (
    column: 'name' | 'affiliate' | 'registeredAt' | 'city' | 'department',
    sort: 'ASC' | 'DESC' | null,
  ) => Promise<AffiliateCensus[]>,
};

type Props = {
  children: React.ReactNode,
};

const initialState: InitialState = {
  query: '',
  onSearchSubmit: (value: string) => null,
  results: [{ affiliate: 0, name: '' }],
  affiliate: dummyAffiliate,
  getAffiliate: (value: number) => null,
  onMemberOrAffiliateActivation: (
    active: string,
    reason: string,
    type: 'affiliate' | 'member',
    member?: number,
  ) => (
    new Promise((resolve) => resolve())),
  onAffiliateFuneralServiceActivation: (active: boolean) => (
    new Promise((resolve) => resolve())
  ),
  onAffiliateUpdate: (value: string, value2: string) => (
    new Promise((resolve) => resolve())
  ),
  onMemberUpdate: (value: string, value2: string, value3: number) => (
    new Promise((resolve) => resolve())
  ),
  createMember: (formData: {
    name: string,
    birthday: string,
    dni: string,
    relation: string,
    fee: string,
  }) => (new Promise((resolve) => resolve())),
  getStates: () => new Promise((resolve) => resolve()),
  getFees: () => new Promise((resolve) => resolve()),
  createAffiliate: () => new Promise((resolve) => resolve()),
  getAll: (
    column: 'name' | 'affiliate' | 'registeredAt' | 'city' | 'department',
    sort: 'ASC' | 'DESC' | null,
  ) => new Promise((resolve) => resolve()),
};

export const AffiliateService = React.createContext(initialState);

const AffiliateServiceProvider = ({ children }: Props) => {
  const history = useHistory();
  const urlParams = new URLSearchParams(history.location.search);
  const httpService = React.useContext(HttpService);
  const [query, setQuery] = React.useState(urlParams.get('query') || '');
  const [results, setResults] = React.useState<AffiliateSimple[]>([{ affiliate: 0, name: '' }]);
  const [affiliate, setAffiliate] = React
    .useState<AffiliateData>(dummyAffiliate);
  const getAffiliate = React.useCallback((value) => {
    const requestConfig: Request = {
      requestType: 'get',
      url: `/affiliate/get-affiliate-data?query=${value}`,
    };

    httpService.ApiService(requestConfig)
      .then((data) => setAffiliate(data.data));
  }, [httpService]);

  React.useEffect(() => {
    const AffiliatesSearch = async () => {
      const requestConfig: Request = {
        requestType: 'get',
        url: `/affiliate/get-affiliate-simple?query=${query}`,
      };

      const response = await httpService.ApiService(requestConfig);
      return response.data;
    };

    if (query.length) {
      setQuery('');
      AffiliatesSearch()
        .then((resultsInstace: AffiliateSimple[]) => {
          setResults(resultsInstace);
          if (resultsInstace.length === 1) history.push(`/dashboard/affiliate-search/selected/${resultsInstace[0].affiliate}`);
          if (resultsInstace.length > 1) history.push(`/dashboard/affiliate-search/results?query=${query}`);
          if (!resultsInstace.length) history.push(`/dashboard/affiliate-search/not-found?query=${query}`);
        });
    }
  }, [history, httpService, query]);

  const onSearchSubmit = (value: string) => setQuery(value);

  async function onMemberOrAffiliateActivation(
    active: string,
    reason: string,
    type: 'affiliate' | 'member',
    member?: number,
  ) {
    const affiliateConfig: Request = {
      requestType: 'post',
      url: '/affiliate/affiliate-member-activation-data',
      configData: {
        data: {
          active,
          reason,
          type,
          id: type === 'affiliate' ? affiliate.affiliate : member,
          affiliate: affiliate.affiliate,
          affiliateId: affiliate.id,
        },
      },
    };

    const response = await httpService.ApiService(affiliateConfig);
    return setAffiliate(response.data);
  }

  async function onAffiliateFuneralServiceActivation(active: boolean) {
    const affiliateConfig: Request = {
      requestType: 'post',
      url: '/affiliate/affiliate-funeral-activation',
      configData: {
        data: {
          affiliate,
          active: !active,
        },
      },
    };

    const response = await httpService.ApiService(affiliateConfig);
    return setAffiliate(response.data);
  }

  async function onAffiliateUpdate(
    value: string,
    field: string,
  ) {
    let phoneData: AffiliateData['contact'] = {
      id: 0,
      number: 0,
      data: '',
    };
    if (field === 'phone') {
      if (affiliate.contact) {
        phoneData = affiliate.contact;
      } else {
        phoneData = {
          id: 0,
          number: parseInt(value, 10),
          data: '',
        };
      }
    }

    const affiliateConfig: Request = {
      requestType: 'post',
      url: '/affiliate/update-affiliate-data',
      configData: {
        data: {
          value,
          field: field === 'phone' ? phoneData : field,
          affiliate: affiliate.affiliate,
        },
      },
    };

    const response = await httpService.ApiService(affiliateConfig);
    return setAffiliate(response.data);
  }

  async function onMemberUpdate(
    value: string,
    field: string,
    member: number,
  ) {
    const affiliateConfig: Request = {
      requestType: 'post',
      url: '/affiliate/update-member-data',
      configData: {
        data: {
          value,
          field,
          member,
          affiliate: affiliate.affiliate,
        },
      },
    };

    const response = await httpService.ApiService(affiliateConfig);
    return setAffiliate(response.data);
  }

  const createMember = async (
    formData: {
      name: string,
      birthday: string,
      dni: string,
      relation: string,
      fee: string,
    }) => {
    const affiliateConfig: Request = {
      requestType: 'post',
      url: '/affiliate/create-member-by-affiliate',
      configData: {
        data: {
          formData,
          affiliate: affiliate.id,
          affiliateCode: affiliate.affiliate,
        },
      },
    };

    const response = await httpService.ApiService(affiliateConfig);
    return setAffiliate(response.data);
  };

  async function getFees() {
    const requestConfig: Request = {
      requestType: 'get',
      url: '/affiliate/get-fee-data',
    };

    const response = await httpService.ApiService(requestConfig);
    return response.data;
  }

  async function getStates() {
    const affiliateConfig: Request = {
      requestType: 'get',
      url: '/affiliate/get-states',
    };

    const response = await httpService.ApiService(affiliateConfig);
    const states: { value: number; label: string; }[] = [];
    response.data.forEach((stateInsatence: { id: number; state: string; }) => {
      const formatedState: {
        value: number;
        label: string;
      } = {
        value: stateInsatence.id,
        label: stateInsatence.state,
      };
      states.push(formatedState);
    });
    return states;
  }

  async function createAffiliate(affiliateFormData: AffiliateFormData) {
    const affiliateConfig: Request = {
      requestType: 'post',
      url: '/affiliate/add-new',
      configData: {
        data: {
          affiliateFormData,
        },
      },
    };

    const response = await httpService.ApiService(affiliateConfig);
    return history.push(`/dashboard/affiliate-search/selected/${response.data.code}`);
  }

  async function getAll(
    column: 'name' | 'affiliate' | 'registeredAt' | 'city' | 'department',
    sort: 'ASC' | 'DESC' | null,
  ): Promise<AffiliateCensus[]> {
    const affiliateConfig: Request = {
      requestType: 'get',
      url: `/affiliate/get-all?column=${column}&sort=${sort}`,
    };

    const response = await httpService.ApiService(affiliateConfig);
    return response.data;
  }

  return (
    <AffiliateService.Provider
      value={{
        query,
        onSearchSubmit,
        results,
        affiliate,
        getAffiliate,
        onMemberOrAffiliateActivation,
        onAffiliateFuneralServiceActivation,
        onAffiliateUpdate,
        onMemberUpdate,
        createMember,
        getStates,
        getFees,
        createAffiliate,
        getAll,
      }}
    >
      {children}
    </AffiliateService.Provider>
  );
};

export default AffiliateServiceProvider;
