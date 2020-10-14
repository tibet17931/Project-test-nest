import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
    @ApiProperty({
        type: 'object',
        additionalProperties: {
            oneOf: [
                { type: 'string' },
                { type: 'boolean' }
            ]
        },
        example: "xxx"
    })
    name: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    breed: string;
}
