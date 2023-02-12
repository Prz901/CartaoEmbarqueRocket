import QrCode from "../../public/QRcode.png";

export function Embarque() {
  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(167.96deg, #8257E5 0%, #271A45 100%)",
      }}
    >
      <div className="w-[327px] h-[656px] flex flex-col ">
        <div className="flex items-center justify-center">
          <p className="text-white">Cartão de embarque</p>
        </div>
        <div className="w-[327px] h-[544px] bg-white my-5 rounded-2xl py-6 px-8">
          <div>
            <div className="flex items-center justify-between">
              <p
                className="text-sm tracking-tight"
                style={{ color: "rgba(0, 0, 0, 0.64)" }}
              >
                Voo
              </p>
              <p
                className="text-sm tracking-tight"
                style={{ color: "rgba(0, 0, 0, 0.64)" }}
              >
                Data
              </p>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-base text-black tracking-tight font-medium">
                R$995
              </h3>
              <h3 className="text-base text-black tracking-tight font-medium">
                23/05/2023
              </h3>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-center justify-between">
              <p
                className="text-sm tracking-tight"
                style={{ color: "rgba(0, 0, 0, 0.64)" }}
              >
                São Paulo, Brasil
              </p>
              <p
                className="text-sm tracking-tight"
                style={{ color: "rgba(0, 0, 0, 0.64)" }}
              >
                São Francisco, EUA
              </p>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-4xl text-black tracking-tight font-medium">
                GRU
              </h3>
              <h3 className="text-4xl text-black tracking-tight font-medium">
                SFO
              </h3>
            </div>
            <div className="flex items-center justify-between border-dotted border-b-2 border-gray-300 pb-6">
              <p className="text-sm text-black tracking-tight ">17:00</p>
              <p className="text-sm text-black tracking-tight ">04:48</p>
            </div>
            <div className=" border-dotted border-b-2 border-gray-300 py-6">
              <div className="flex items-center justify-between">
                <p
                  className="text-sm font-normal"
                  style={{ color: "rgba(0, 0, 0, 0.64)" }}
                >
                  Passageiro
                </p>
                <p
                  className="text-sm font-normal"
                  style={{ color: "rgba(0, 0, 0, 0.64)" }}
                >
                  Assento
                </p>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium text-black">
                  Rodrigo Terron
                </h3>
                <h3 className="text-base font-medium text-black">2BA</h3>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col justify-between h-[150px]">
                <div>
                  <p
                    className="font-normal text-sm"
                    style={{ color: "rgba(0, 0, 0, 0.64)" }}
                  >
                    Embarque
                  </p>
                  <p className="h-[27px] bg-[#633BBC] text-white rounded-lg flex items-center justify-center font-medium">
                    16:15
                  </p>
                </div>
                <div>
                  <p
                    className="font-normal text-sm"
                    style={{ color: "rgba(0, 0, 0, 0.64)" }}
                  >
                    Terminal
                  </p>
                  <p className="font-medium text-sm">2</p>
                </div>
                <div>
                  <p
                    className="font-normal text-sm"
                    style={{ color: "rgba(0, 0, 0, 0.64)" }}
                  >
                    Portão
                  </p>
                  <p className="font-medium text-sm">15</p>
                </div>
              </div>
              <div>
                <div className="pt-4">
                  <img src={QrCode} alt="qr code" />
                  <p
                    className="font-normal text-xs text-center"
                    style={{ color: "rgba(0, 0, 0, 0.64)" }}
                  >
                    Grupo de embarque: 3
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center pt-3">
              <p style={{ color: "rgba(0, 0, 0, 0.64)" }}>
                <strong className="font-medium text-base">Atenção</strong> o
                portao fecha 16:45
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[269.14px] h-[48px] ">
            <p className="text-sm tracking-tight text-white opacity-70">
              Qualquer problema procure o balcão de atendimento da sua companhia
              aérea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
