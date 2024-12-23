import React from "react";
import {
  useNavigate,
} from 'react-router-dom';
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  extendVariants,
  ModalHeader,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import logoInline from '../assets/logoInline.svg';
import { MdOutlineClose } from "react-icons/md";
import { BiSolidLogIn } from "react-icons/bi";
import { RxExit } from "react-icons/rx";
import {
  FaHome,
  FaUser,
  FaWpforms,
} from "react-icons/fa";
import authStore from '../stores/auth';

const Sidebar = extendVariants(Modal, {
  variants: {
    height: {
      "half-full": {
        base: "h-[50%] max-h-full",
      },
      half: {
        base: "h-[50%] max-h-[50%]",
      },
      full: {
        base: "h-full max-h-full",
      },
    },
    placement: {
      "left": {
        wrapper: [
          "fixed",
          "top-0",
          "left-0",
          "bottom-0",
          "items-start",
          "sm:items-start",
          "[--scale-enter:100%]",
          "[--scale-exit:100%]",
          "[--opacity-enter:100%]",
          "[--opacity-exit:0%]",
          "[--slide-y-enter:0px]",
          "[--slide-y-exit:0px]",
          "[--slide-x-enter:0px]",
          "[--slide-x-exit:-200px]",
          "sm:[--scale-enter:100%]",
          "sm:[--scale-exit:100%]",
          "justify-start",
        ],
        base: [
          "m-0",
          "sm:m-0",
          "rounded-none",
        ],
        closeButton: [
          "right-3",
          "top-3",
        ],
        header: [
          "pr-12",
        ],
      },
      "right": {
        wrapper: [
          "fixed",
          "top-0",
          "left-0",
          "bottom-0",
          "items-start",
          "sm:items-start",
          "[--scale-enter:100%]",
          "[--scale-exit:100%]",
          "[--opacity-enter:100%]",
          "[--opacity-exit:0%]",
          "[--slide-y-enter:0px]",
          "[--slide-y-exit:0px]",
          "[--slide-x-enter:0px]",
          "[--slide-x-exit:200px]",
          "sm:[--scale-enter:100%]",
          "sm:[--scale-exit:100%]",
          "justify-end",
        ],
        base: [
          "m-0",
          "sm:m-0",
          "rounded-none",
        ],
        closeButton: [
          "left-3",
          "top-3",
          "text-white",
          "right-auto"
        ],
        header: [
          "pl-12",
        ],
      },
    },
  },
  defaultVariants: {
    size: "md",
    height: "full",
    shadow: "sm",
    placement: "left",
    backdrop: "opaque",
    scrollBehavior: "inside",
  },
});

const motionProps = {
  variants: {
    enter: {
      x: "var(--slide-x-enter)",
      opacity: "var(--opacity-enter)",
      scale: "var(--scale-enter)",
      y: "var(--slide-y-enter)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      x: "var(--slide-x-exit)",
      opacity: "var(--opacity-exit)",
      scale: "var(--scale-exit)",
      y: "var(--slide-y-exit)",
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  }
}

type SideBarProps = {
  disclosure: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: () => void;
  },
};

export default function SideBar({ disclosure }: SideBarProps) {
  const { isOpen, onOpenChange, onClose } = disclosure;
  const navigate = useNavigate();
  const { isLoggedIn, logout } = authStore();

  const handleClick = (path: string) => {
    if (path === 'logout') {
      logout();
      navigate('/login');
      onClose();
    } else {
      navigate(path);
      onClose();
    }
  }

  const defaultItems = [
    {
      label: 'Loja',
      startContent: <FaHome className="text-slate-600" />,
      key: '/kit-list',
      className: 'py-2',
    },
  ];

  const loggedOutItems = [
    {
      label: 'Entrar',
      startContent: <BiSolidLogIn className="text-slate-600" />,
      key: '/login',
      className: 'py-2',
    },
    {
      label: 'Registrar',
      startContent: <FaWpforms className="text-primary" />,
      key: '/register',
      className: 'py-2',
    },
  ];

  const loggedInItems = [
    {
      label: 'Minha Conta',
      startContent: <FaUser className="text-slate-600" />,
      key: '/user',
      className: 'py-2',
    },
    {
      label: 'Sair',
      startContent: <RxExit className="text-danger" />,
      key: 'logout',
      className: 'mt-6 py-2 text-danger',
    },
  ];

  const items = [
    ...defaultItems,
    ...(!isLoggedIn ? loggedOutItems : []),
    ...(isLoggedIn ? loggedInItems : []),
  ];


  return (
    <div className="flex flex-col gap-2">
      <Sidebar
        placement="left"
        isOpen={isOpen}
        height={"full"}
        onOpenChange={onOpenChange}
        motionProps={motionProps}
        closeButton={
          <Button
            isIconOnly
            color="secondary"
            className="bg-white"
          >
            <MdOutlineClose className="text-white text-xl" />
          </Button>
        }
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader
                className="flex flex-col gap-1 bg-primary"
              >
                <img src={logoInline} className="w-40 h-15 mx-auto" alt="logo" />
              </ModalHeader>
              <ModalBody>
                <div className="w-full px-1 py-2 rounded-small">
                  <Listbox
                    aria-label="Actions variants"
                    variant="faded"
                    color="primary"
                    items={items}
                    onAction={(key) => handleClick(key.toString())}
                  >
                    {(item) => (
                      <ListboxItem
                        key={item.key}
                        color={item.key === "logout" ? "danger" : "default"}
                        className={item.className}
                        startContent={item.startContent}
                        title={<h1 className="font-bold text-md text-slate-600">
                          {item.label}
                        </h1>}
                      >
                      </ListboxItem>
                    )}
                  </Listbox>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Sidebar>
    </div>
  );
}
