import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';


interface MailComponentProps {
  message: string;
}


const MailComponent: React.FC<MailComponentProps> = ({ message }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <img
            src="/images/Mail.png"
            alt="Mail"
            className="absolute h-auto animate-fade-right cursor-pointer
            bottom-[-10%] right-[3%] w-[33%] 
            md:bottom-[16%] md:right-[3%] md:w-[30%] 
            xl:bottom-[16%] xl:right-[-7%] xl:w-[76%]"
            onClick={() => setOpen(true)}
          />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Special Message</DialogTitle>
            <DialogDescription>
              {message}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <img
          src="/images/Flower IV.png"
          alt="Flower IV"
          className="absolute h-auto 
          bottom-[-18%] right-[23%] w-[10%]
          md:bottom-[8%] md:right-[22%] md:w-[10%]
          xl:bottom-[10%] xl:right-[37%] xl:w-[29%]"
      />
    </>
  );
};

export default MailComponent;