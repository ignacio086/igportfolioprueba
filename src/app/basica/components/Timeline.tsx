"use client";
import { Button,Timeline } from "keep-react";
import { ArrowRight } from "phosphor-react";

export const TimelineComponent = () => {
  return (
    <Timeline gradientColor="bg-gradient-12" gradientPoint={true}>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="text-white" >Agosto 2023</Timeline.Time>
          <Timeline.Title className="text-lime-300">Primer trabajo</Timeline.Title>
          <Timeline.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sed itaque, perspiciatis dolor voluptatibus voluptas ipsum do
          </Timeline.Body>
          <Button  size="sm">
            Descubre mas
            <ArrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="text-white">Julio 2023</Timeline.Time>
          <Timeline.Title className="text-lime-300">Segundo Trabajo</Timeline.Title>
          <Timeline.Body>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta est mollitia doloribus consequuntur aspernatur hic sit velit eligendi nostrum! Asperiores perspiciatis nostrum enim delectus vitae sit voluptatum illum atque in.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="text-white">Junio 2023</Timeline.Time>
          <Timeline.Title className="text-lime-300">Tercer Trabajo</Timeline.Title>
          <Timeline.Body>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ullam sequi eveniet doloremque, amet perspiciatis ex mollitia provident necessitatibus laborum doloribus perferendis sed excepturi nam vitae magnam est numquam minus!
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}